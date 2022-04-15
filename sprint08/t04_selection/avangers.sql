use ucode_web;
SELECT heroes.name, SUM(powers.points)
FROM heroes RIGHT JOIN powers ON heroes.id = powers.hero_id
GROUP BY heroes.id
ORDER BY SUM(powers.points) DESC LIMIT 1;


SELECT heroes.name , SUM(powers.points)
FROM heroes LEFT JOIN powers ON heroes.id = powers.hero_id
WHERE powers.type = "defense"
GROUP BY heroes.id
ORDER BY SUM(powers.points) limit 1;


SELECT heroes.name
FROM heroes JOIN teams ON heroes.id = teams.hero_id
WHERE teams.name = "Avangers"
group by heroes.id
having COUNT(teams.hero_id) = 1
ORDER BY SUM(powers.points) DESC;


SELECT teams.name, SUM(powers.point)
FROM heroes JOIN powers ON teams.hero_id = powers.hero_id
WHERE teams.name = 'Avangers' OR teams.name = "Hydra"
GROUP by  teams.name
ORDER BY SUM(powers.points);