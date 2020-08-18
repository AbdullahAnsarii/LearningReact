//Exercise 1
//map() and filter() are most commonly used with react

let musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
]

//map()

let albumSalesString = musicData.map( album => `${album.name} by ${album.artist} has sold ${album.sales} copies` );
console.log(albumSalesString);

//filter()

let results = musicData.filter(album => album.name.length>=10 && album.name.length<=25);
console.log(results);

//map() and filter() chained

let popular = musicData
.filter(album => album.sales>1000000)
.map(filteredAlbum => `${filteredAlbum.artist} is a great performer`);

console.log(popular);