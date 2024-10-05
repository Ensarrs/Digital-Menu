const menuItems = [
    {
        category: 'pijetfresk',
        name: 'Coca-Cola',
        image: 'https://m.media-amazon.com/images/I/61qtDO0X9GL.jpg', // Replace this with actual image URL
        description: 'Pije Gazuese',
        price: '1.5 eur'
    },
    {
        category: 'pijetfresk',
        name: 'Fanta',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkJogpvTMUqkTcpdRmixXor8QuZoGalWcHA&s', // Replace this with actual image URL
        description: 'Pije Gazuese',
        price: '1.2 eur'
    },
    {
        category: 'desertet',
        name: 'Trileqe',
        image: 'https://i.ytimg.com/vi/A22HmfxRgik/maxresdefault.jpg', // Replace this with actual image URL
        description: 'Embelsire',
        price: '2.5 eur'
    },
    {
        category: 'desertet',
        name: 'Torte snickers',
        image: 'https://www.homecookingadventure.com/wp-content/uploads/2022/01/snickers_mousse_cake_main.jpg', // Replace this with actual image URL
        description: 'Embelsire',
        price: '3.5 eur'
    },
    {
        category: 'pizza',
        name: 'Pizza Proshut',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy-34h1l8Ves-Jidn9xF1Dqx9KqCYIskl1g&s', // Replace this with actual image URL
        description: 'Pizza',
        price: '5.5 eur'
    },
    {
        category: 'pizza',
        name: 'Pizza Margarita',
        image: 'https://media.istockphoto.com/id/1168754685/photo/pizza-margarita-with-cheese-top-view-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=psLRwd-hX9R-S_iYU-sihB4Jx2aUlUr26fkVrxGDfNg=', // Replace this with actual image URL
        description: 'Pizza',
        price: '5.5 eur'
    },
    {
        category: 'skara',
        name: 'Qebapa',
        image: 'https://i.ytimg.com/vi/3GhqXEQTozE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBr6QUVu6SvN95_rQi_KoUpbPKmPQ', // Replace this with actual image URL
        description: 'Qebapa shtepie',
        price: '5.5 eur'
    },
    {
        category: 'skara',
        name: 'Pleskavic',
        image: 'https://sofiaadventures.com/wp-content/uploads/2021/03/shutterstock_1784945408.jpg', // Replace this with actual image URL
        description: 'Pleskavic shtepis',
        price: '5.5 eur'
    },
    {
        category: 'about',
        name: 'Rreth nesh',
        image: 'https://st.depositphotos.com/1038076/4908/i/450/depositphotos_49080337-stock-photo-about-us.jpg', // Replace this with actual image URL
        description: 'Lorem ipsum dolor',
        price: 'Nr kontaktues: ###-###-###'
    }
];
function filterMenu() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const menuGallery = document.getElementById('menu-gallery');

    // Clear previous items
    menuGallery.innerHTML = '';

    // Filter items based on the selected category
    const filteredItems = menuItems.filter(item => {
        return selectedCategory === 'all' || item.category === selectedCategory;
    });

    // Display the filtered items
    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
        `;

        menuGallery.appendChild(menuItemDiv);
    });
}

// Initialize the menu by showing all items on page load
window.onload = filterMenu;
 