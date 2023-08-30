const Client = require('./lib/client.js');
const Query = require('./lib/query.js');
const Permission = require('./lib/permission.js');
const Role = require('./lib/role.js');
const ID = require('./lib/id.js');
const InputFile = require('./lib/inputFile.js');
const AppwriteException = require('./lib/exception.js');
const Account = require('./lib/services/account.js');
const Avatars = require('./lib/services/avatars.js');
const Databases = require('./lib/services/databases.js');
const Functions = require('./lib/services/functions.js');
const Graphql = require('./lib/services/graphql.js');
const Health = require('./lib/services/health.js');
const Locale = require('./lib/services/locale.js');
const Storage = require('./lib/services/storage.js');
const Teams = require('./lib/services/teams.js');
const Users = require('./lib/services/users.js');

module.exports = {
    Client,
    Query,
    Permission,
    Role,
    ID,
    InputFile,
    AppwriteException,
    Account,
    Avatars,
    Databases,
    Functions,
    Graphql,
    Health,
    Locale,
    Storage,
    Teams,
    Users,
};
