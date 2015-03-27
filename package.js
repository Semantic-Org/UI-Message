
Package.describe({
  name    : 'semantic:ui-message',
  summary : 'Semantic UI - Message: Single component release',
  version : '1.11.6',
  git     : 'git://github.com/Semantic-Org/UI-Message.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'message.css'
  ], 'client');
});
