const data = ['21 Savage', 'Kanye West', 'Travis Scott', 'Kedrik Lamar', 'J Cole', 'Eminem', 'Future', 'Gunna', 'Don Toliver', 'Juice World', 'Kodak Black', 'Playboi Carti', 'Swae Lee', 'Young Thug', 'Drake', 'Lil Baby', 'Jay Z', '2Pac'];

function getName(){
    const l = data.length;
    const idx = Math.floor(Math.random() * l);
    return data[idx];
}

module.exports = getName;