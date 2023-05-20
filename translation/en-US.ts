import { textJoin } from 'mobx-i18n';

export default {
  home_page: 'Home page',
  load_more: 'Load more...',
  no_more: 'No more',
  select: 'select',
  open_hackathon_platform: 'Open Hackathon',
  create_activity: 'Create Activity',
  edit_activity: 'Edit Activity',
  powered_by: 'Powered by',
  idea2app_scaffolding: 'idea2app Scaffolding',
  registration_period: 'Registration Period',
  activity_period: 'Activity Period',
  register_after: ({ distance, unit }: Record<'distance' | 'unit', string>) =>
    textJoin('Registration after', distance, unit),
  accepting_applications: 'Accepting Applications',
  activity_ended: 'Activity ended',
  my_team: 'My Team',
  in_progress: 'In progress',
  judges_review: 'Judges reviewing',
  submit_work_deadline: 'Submission Deadline',
  pending_review: 'offline, review pending',
  create_hackathons: 'Create Hackathons',
  all_activity: 'All Activities',
  language: 'Language',
  get_started: 'Get Started',
  open_source_code: 'Source Code',
  people_registered: 'registered',
  time_range: 'Time range',
  name: 'Name',
  last_login_time: 'Last login time',
  login_way: 'Login Option',
  phone_number: 'Contact number',
  contact_address: 'Contact address',
  description: 'description',
  please_enter: 'Please enter',
  please_enter_description: 'Please provide a description',
  please_enter_logo_url: 'Please provide the Logo URI',
  please_enter_url: 'Please input a URL',
  logo_URL: 'Logo URL',
  url: 'URL',
  operation: 'Operation',
  user_name: 'Username',
  nick_name: 'Nickname',
  mail: 'Mail',
  role_source: 'Account source',
  introduction: 'Introduction',
  apply_role: 'Apply for a role',
  apply_time: 'Application time',
  remark: 'Comment',
  remark_placeholder: 'comment for faster admin approval.',
  quantity: 'Quantity',
  type: 'Type',
  photo: 'Photo',
  clear_form: 'Clear Form',
  prize_settings: 'Prize Settings',
  update: 'Update',
  award: 'Award',
  a_total_of: 'A total of',
  people: 'people',
  personal: 'Personal',
  user: 'User',
  team: 'Team',
  join_activity_team: 'Contestant Team',
  loading: 'Loading...',
  sign_in: 'Sign in',
  sign_out: 'Sign out',
  create: 'Create',
  edit: 'Edit',
  submit: 'Submit',
  save: 'Save',
  success: 'Success',
  cancel: 'Cancel',
  edit_profile: 'Edit Profile',
  hackathons: 'Hackathons',
  more_events: 'More events',
  registration_deadline: 'Registration closing in',
  registered: 'registered',
  register: 'Register',
  sponsors: 'Sponsors',
  partners: 'Partners',
  top_hackathons: 'Top hackathons',
  manage_this_hackathon: 'Manage',
  delete: 'Delete',
  all: 'All',
  organizer: 'Organizer',
  organizer_manage: 'Manage Organizer',
  activity_address: 'Activity Address',
  activity_status: 'Activity Status',
  registration_status: 'Registration Status',
  registration_count: 'Registration Count',
  register_now: 'Register Now',
  cloud_development: 'Cloud development',
  create_team: 'Create Team',
  create_team_success: 'Team created successfully!',
  team_introduction: 'Team Profile',
  auto_approve: 'Automatic Approval',
  registration_needs_review:
    'The registration requires administrator approval. Please wait patiently...',
  hackathon_detail: 'Hackathon detail',
  no_news_yet: 'No updates',
  no_team: 'Not currently part of any team',
  no_address_navigation: 'No address navigation',
  latest_news: 'Latest news',
  all_teams: 'All teams',
  team_leader: 'Team leader',
  team_members: 'Team members',
  join_team: 'Join team',
  leave_team: 'Leave team',
  manage_team: 'Manage Team',
  cancel_application: 'Cancel Application',
  team_manage: 'Team Manage',
  team_works: 'Team work',
  please_make_sure: 'Please make sure',
  followed_hackathons: 'Hackathons followed ',
  owned_hackathons: 'Hackathons Owned ',
  joined_hackathons: 'Hackathons Joined ',
  questionnaire: 'Questionnaire',
  view_statistics: 'View Statistics',
  registration_statistics: 'Registration Statistics',
  total_people: 'Total people:',
  export_excel: 'Export to Excel',
  sign_up_user: 'Sign-up user',
  please_complete_all_mandatory_fields_before_you_proceed:
    'Please ensure all required fields are completed before proceeding',
  personal_profile: 'Personal Profile',
  enter_for: 'Sign Up',
  linkein_or_cv: 'LinkedIn/CV/Blog',
  social_media_account_or_twitter_or_weibo:
    'Social Media Account/Twitter/Weibo',
  which_of_these_particular_areas_are_you_interested_in_going_into_this_event:
    'Which topics of event interests you ?',
  what_do_you_hope_to_learn_from_the_workshops:
    'What do you want to learn from workshops',
  do_you_plan__on_hacking_solo_or_with_a_team:
    'Are you planning to participate in the hackathon solo or as part of a team?',
  yes: 'Yes',
  no_i_prefer_solo: 'No, I prefer Solo',
  no_i_have_a_team: 'No, I have a team',
  would_you_be_open_to_having_a_beginner_join_your_team:
    'Do you mind beginners join your team?',
  no: 'No',
  anything_else_we_should_know_about_what_youre_looking_for_in_a_team_or_teammate:
    'Regarding teammates, do you have any other specific requirements? We will do our best to help you find suitable candidates and support you throughout your hackathon journey.',
  what_is_your_occupation: 'What is your occupation',
  front_end_engineer: 'Front-End engineer',
  back_end_engineer: 'Back-End engineer',
  client_engineer: 'Client-side engineer',
  game_developerment_engineer: 'Game engineer',
  algorithm_engineer: 'Algorithm engineer',
  blockchain_engineer: 'Blockchain engineer',
  operations: 'Operations',
  quality_assurance_engineer: 'Quality assurance engineer ',
  architect: 'Software architect',
  project_manager: 'Project manager',
  student: 'Student',
  others: 'Others',
  what_are_your_commonly_used_programming_languages:
    'Commonly used programming languages',
  approve: 'Approve',
  status_none: 'None',
  status_approved: 'Approved',
  status_pending: 'Pending',
  status_rejected: 'Rejected',
  all_user: 'All users',
  referee: 'Referee',
  admin: 'Admin',
  member: 'Member',
  please_select_at_least_one_user: 'Please select at least one user',
  confirm_to_delete_admin_or_referee:
    'Confirm to delete the selected admin/referee?',
  please_select_at_least_one_partner:
    'Please select at least one sponsor/partner!',
  confirm_to_delete_partner: 'Confirm to delete the selected sponsor/partner?',
  add: 'Add',
  search: 'Search',
  export: 'Export',
  all_works: 'All works',
  repository_name: 'Repository name',
  authorize_all_teammates: 'Authorize all teammates',
  instant_cloud_development: 'Instant cloud development',
  cloud_development_environment: 'Cloud development environment',
  creat_clound_environment: 'Create a development environment',
  team_registration: 'Team registration',
  role_management: 'Role Management',
  submit_work: 'Submit work',
  upload_work: 'Upload work',
  upload_file: 'Upload file',
  work_type: 'Work type',
  edit_work: 'Edit Work',
  work_url: 'Online link to the project',
  confirm_delete_work: 'Are you sure you want to delete the work?',
  platform_management: 'Platform management',
  host: 'Host',
  undertake: 'Undertake',
  coorganizer: 'Co-organizer',
  sponsor: 'Sponsor',
  titlesponsor: 'Title Sponsor',
  basic_settings: 'Basic Settings',
  works_awards: 'Works Awards',
  add_sponsor_information: 'Add organizer information',
  sponsor_information: 'Sponsor Information',
  competition_location: 'Competition location',
  announcement: 'Announcement',
  advance_settings: 'Advanced settings',
  cloud_resource: 'Cloud resources',
  virtual_environment: 'Virtual Environment',
  environmental_monitoring: 'Environmental Monitoring',
  log: 'Log',
  website: 'Website',
  image: 'Image',
  video: 'Video',
  view_work: 'View Work',
  update_time: 'Update time',
  create_time: 'Create time',
  hacker_pavilion: 'Hacker Pavilion',
  mystery_hacker: 'Mysterious Hacker',
  status: 'Status',
  role_type: 'Role Type',
  send: 'Send',
  search_an_user: 'Please search and select a user first',
  add_manager: 'Add administrator',
  create_work_success: 'Event created successfully, apply for publishing?',
  has_published:
    'An publishing application has been made, please wait for review',
  edited_success: 'Modified Successfully ',
  quote_required: '(required)',
  name_placeholder: 'ID, letters and numbers only',
  please_enter_name: 'Please enter a name',
  activity_id: 'Activity ID',
  activity_name: 'Activity Name',
  disaplay_name: 'Display Name',
  tag: 'Tag',
  tag_placeholder: 'tags, separated by spaces',
  bannerUrls: 'Head picture (required, up to 10)',
  enrollment: 'Registration Time',
  activity_time: 'Activity time',
  judge_time: 'Rating time',
  ribbon: 'Commercial slogan',
  max_enrollment: 'Enrollment limit',
  max_enrollment_placeholder: '0 means infinite',
  activity_introduction: 'Introduction',
  activity_detail: 'Activity detail',
  sure_delete_this_work: 'Are you sure to delete this award?',
  apply_publish: 'Apply online',
  publish: 'Publish',
  offline: 'Offline',
  sure_publish: ({ name }: { name: string }) =>
    textJoin('Are you sure to publish', name, '?'),
  sure_offline: ({ name }: { name: string }) =>
    textJoin('do you want to go offline', name, '?'),
  activity_manage: 'Manage Activity',
  no_permission: 'No permission yet',
  sign_up_trends: 'Sign-up trends',
  basic_info: 'Basic Information',
  city_distribution: 'City distribution',
  approval_status: 'Approval Status',
  custom_questionnaire: 'Custom questionnaire',
  access_preview: 'Access Preview',
  title: 'Title',
  content: 'Content',
  sure_delete_this_message: 'Are you sure to delete this message?',
  admin_management: 'Admin management',
  confirm_to_delete_platform_admin:
    'Confirm to delete the selected platform admin',
  profile: 'profile',
  add_template_repository: 'Add template repository',
  stay_tuned: 'Stay tuned',
  confirm_to_delete_announcement:
    'Confirm to delete the selected announcement?',
  please_select_at_least_one_announcement:
    'Please select at least one announcement',
  announcement_manage: 'Announcement management',
  publish_announcement: 'Publish announcement',
  sign_up_successfully: 'Sign up successfully',
  rejected: 'rejected',
  already_registered_waiting_for_approval:
    'Already registered, waiting for approval',
  not_sign_up: 'Not enrolled',
  please_use_github_login: 'Please use login via GitHub',
  score: 'Score',
  work_list: 'Works',
  prize_list: 'Prizes',
  prize_distribution: 'Prize distribution',
  all_prize: 'All prizes',
  grant: 'Grant',
  confirm: 'Confirm',
  team_name: 'Team name',
  huaweicloud: 'Huawei Cloud',
  microsoft: 'Microsoft',
  authing: 'Authing',
  gitcafe: 'Gitcafe',
  ubuntukylin: 'Ubuntukylin',
  alauda: 'Alauda',
  jikexueyuan: 'Jikexueyuan',
  jstorm: 'JStorm',
  wicresoft: 'Wicresoft',
  juhe: 'Juhe',
  hackathon_message: 'Hackathon message',
  Second: 'Second',
  Minute: 'Minute',
  Hour: 'Hour',
  Day: 'Day',
  Week: 'Week',
  Month: 'Month',
  Year: 'Year',
  unlimited: 'Unlimited',
  start_time_earlier_end_time: 'Start time must be earlier than end time',
} as const;
