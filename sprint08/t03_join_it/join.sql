use ucode_web;

SELECT heroes.name, teams.name 
FROM heroes
JOIN teams ON heroes.id = teams.hero_id;

SELECT heroes.name, powers.name
FROM heroes
LEFT JOIN powers
ON heroes.id = powers.hero_id;

SELECT heroes.name, powers.name, teams.name
FROM heroes
JOIN powers ON heroes.id = powers.hero_id
JOIN teams ON heroes.id = teams.hero_id;