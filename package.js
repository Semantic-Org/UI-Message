
Package.describe({
  name    : 'semantic:ui-message',
  summary : 'Semantic UI - Message: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Message.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'message.css'
  ], 'client');
});
