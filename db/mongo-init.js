print('Start #################################################################');

db = db.getSiblingDB('checklist');

db.createUser({
    user: 'root',
    pwd: 'Password11',
    roles: [
        {
            role: 'readWrite',
            db: 'checklist',
        },
    ],
});

print('END #################################################################');
