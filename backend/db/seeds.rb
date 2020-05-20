beach = Beach.create(name: 'Manly')
session = Session.create!(beach_id: 1, date: Date.today(), board: 'fish', description: 'Great!')