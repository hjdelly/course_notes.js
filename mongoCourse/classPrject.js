db.anime.insertMany([
    {
        "name": "Boku no Hīrō Akademia",
        "publishedDate": new Date(),
        "author": [
            {"name": "Kōhei Horikoshi"}
        ]
    },
    {
        "name": "Shingeki no Kyojin",
        "publishedDate": new Date(),
        "author": [
            {"name": "Hajime Isayama"}
        ]
    },
    {
        "name": "Desu Nōto",
        "publishedDate": new Date(),
        "author": [
            {"name": "Tsugumi Ohba"}
        ]
    },
    {
        "name": "Kimetsu no Yaiba",
        "publishedDate": new Date(),
        "author": [
            {"name": "Koyoharu Gotōge"}
        ]
    },
    {
        "name": "Tonari no Kaibutsu-kun",
        "publishedDate": new Date(),
        "author": [
            {"name": "Robico"}
        ]
    },
    {
        "name": "Yahari Ore no Seishun Rabukome wa Machigatteiru",
        "publishedDate": new Date(),
        "author": [
            {"name": "Wataru Watari"}
        ]
    },
    {
        "name": "Shokugeki no Sōma",
        "publishedDate": new Date(),
        "author": [
            {"name": "Yūto Tsukuda"}
        ]
    },
    {
        "name": "Haikyū",
        "publishedDate": new Date(),
        "author": [
            {"name": "Haruichi Furudate"}
        ]
    },
    {
        "name": "Ahiru no Sora",
        "publishedDate": new Date(),
        "author": [
            {"name": "Takeshi Hinata"}
        ]
    },
    {
        "name": "Burakku Kurōbā",
        "publishedDate": new Date(),
        "author": [
            {"name": "Yūki Tabata"}
        ]
    }
])

/////////////////////////////////////////////////////////////////

db.anime.remove({name: "Desu Nōto"}, 1)

db.anime.remove({name: "Tonari no Kaibutsu-kun"}, 1)

db.anime.remove({name: "Shokugeki no Sōma"}, 1)

db.anime.remove({name: "Ahiru no Sora"}, 1)

/////////////////////////////////////////////////////////////////