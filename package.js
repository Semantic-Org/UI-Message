var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-message',
  summary : 'Semantic UI - Message (official): Single component release of message',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Message.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
