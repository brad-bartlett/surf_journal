beach = Beach.create(name: 'Manly', beach_id: 1)
session = Session.create!(beach_id: 1, date: Date.today(), board: 'fish', description: 'Great!')