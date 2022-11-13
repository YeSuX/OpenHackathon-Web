import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { InferGetServerSidePropsType } from 'next';
import { createRef, FormEvent, PureComponent } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import { ActivityManageFrame } from '../../../../components/Activity/ActivityManageFrame';
import { MessageModal } from '../../../../components/Message/ActivityMessageModal';
import { MessageList } from '../../../../components/Message/MessageList';
import activityStore from '../../../../models/Activity';
import { withRoute } from '../../../api/core';

export const getServerSideProps = withRoute<{ name: string }>();

@observer
export default class MessageListPage extends PureComponent<
  InferGetServerSidePropsType<typeof getServerSideProps>
> {
  store = activityStore.messageOf(this.props.route.params!.name);

  form = createRef<HTMLFormElement>();

  @observable
  show = false;

  selectedIds: string[] = [];

  handleReset = () => this.form.current?.reset();

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const { selectedIds } = this;

    if (!selectedIds[0]) return alert('请至少选择一条公告!');

    if (!confirm('确认删除所选公告？')) return;

    for (const id of selectedIds) await this.store.deleteOne(id);
  };

  render() {
    const { resolvedUrl, params } = this.props.route,
      { store, show } = this;
    const loading = store.uploading > 0;

    return (
      <ActivityManageFrame
        name={params!.name}
        path={resolvedUrl}
        title="公告管理"
      >
        <Container fluid>
          <Form
            className="d-flex justify-content-between align-items-center"
            onSubmit={this.handleSubmit}
          >
            <Button
              variant="success"
              className="my-3"
              disabled={loading}
              onClick={() => (this.show = true)}
            >
              <FontAwesomeIcon className="me-2" icon={faPlus} />
              发布新公告
            </Button>
            <Button variant="danger" type="submit" disabled={loading}>
              <FontAwesomeIcon className="me-2" icon={faTrash} />
              删除
            </Button>
          </Form>

          <MessageList
            store={store}
            hideControls={false}
            onSelect={list => (this.selectedIds = list)}
            onEdit={() => (this.show = true)}
            onDelete={this.handleReset}
          />
        </Container>

        <MessageModal
          store={store}
          show={show}
          onHide={() => (this.show = false)}
          onSave={() => (this.show = false) || store.refreshList()}
        />
      </ActivityManageFrame>
    );
  }
}