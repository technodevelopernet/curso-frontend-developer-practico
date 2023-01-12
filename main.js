const navbarEmail = document.querySelector( '.navbar-email' );
const desktopMenu = document.querySelector( '.desktop-menu' );
const mobileMenu = document.querySelector( '.mobile-menu' );
const menuIcon = document.querySelector( '.menu' );
const productdetail = document.querySelector( '.product-detail' );
const productoDetailClose = document.querySelector( '.product-detail-close' );
const productodetail = document.querySelector( '.producto-detail' );
const navbarshoppingcart = document.querySelector( '.navbar-shopping-cart' );
const cardscontainer = document.querySelector( '.cards-container' );
const mainContainer = document.querySelector( '.main-container' );


navbarEmail.addEventListener( 'click', toggleDesktopMenu );
menuIcon.addEventListener( 'click', toggleMobileMenu );
navbarshoppingcart.addEventListener( 'click', toggleProductDetail );
productoDetailClose.addEventListener( 'click', closeProducotDetails );


function toggleDesktopMenu ()
{
    const isProductDetail = productdetail.classList.contains( 'inactive' );
    const isMobileMenuClosed = mobileMenu.classList.contains( 'inactive' );
    const isproductodetail = productodetail.classList.contains('inactive');

    if ( !isproductodetail )
    {
        productodetail.classList.add( 'inactive' );
    }

    if ( !isProductDetail )
    {
        productdetail.classList.add( 'inactive' );
    }

    if ( !isMobileMenuClosed )
    {
        mobileMenu.classList.add( 'inactive' );
    }
    desktopMenu.classList.toggle( 'inactive' );
    mainContainer.classList.remove( 'inactive' );
}

function toggleMobileMenu ()
{
    const isProductDetail = productdetail.classList.contains( 'inactive' );
    const isDesktopMenuClosed = desktopMenu.classList.contains( 'inactive' );
    const isproductodetail = productodetail.classList.contains( 'inactive' );

    if ( !isproductodetail )
    {
        productodetail.classList.add( 'inactive' );
    }

    if ( !isProductDetail )
    {
        productdetail.classList.add( 'inactive' );
    }

    if ( !isDesktopMenuClosed )
    {
        desktopMenu.classList.add( 'inactive' );
    }

    mobileMenu.classList.toggle( 'inactive' );
    mainContainer.classList.remove( 'inactive' );

}

function toggleProductDetail ()
{
    const isMobileMenuClosed = mobileMenu.classList.contains( 'inactive' );
    const isDesktopMenuClosed = desktopMenu.classList.contains( 'inactive' );
    const isproductodetail = productodetail.classList.contains( 'inactive' );

    if ( !isproductodetail )
    {
        productodetail.classList.add( 'inactive' );
    }

    if ( !isMobileMenuClosed )
    {
        mobileMenu.classList.add( 'inactive' );
    }

    if ( !isDesktopMenuClosed )
    {
        desktopMenu.classList.add( 'inactive' );
    }

    productdetail.classList.toggle( 'inactive' );
    mainContainer.classList.remove( 'inactive' );

}

const productsList = [];

productsList.push( {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
} );

productsList.push( {
    name: 'Pantalla',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
} );

productsList.push( {
    name: 'Computer',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
} );

productsList.push( {
    name: 'Bike Pro',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
} );


function renderProduct(arr) {

    for ( const product of arr )
    {
        const productcard = document.createElement( 'div' );
        productcard.classList.add( 'product-card' );

        const productimg = document.createElement( 'img' );
        productimg.setAttribute( 'src', product.image );
        productimg.addEventListener('click', openProductoDetails);

        const productinfo = document.createElement( 'div' );
        productinfo.classList.add( 'product-info' );

        const productinfodiv = document.createElement( 'div' );

        const productprice = document.createElement( 'p' );
        productprice.innerText = '$ ' + product.price;
        const productname = document.createElement( 'p' );
        productname.innerText = product.name;

        productinfodiv.appendChild( productprice );
        productinfodiv.appendChild( productname );


        const productinfofigure = document.createElement( 'figure' );
        const productfigureimg = document.createElement( 'img' );
        productfigureimg.setAttribute( 'src', './icons/bt_add_to_cart.svg' );

        productinfofigure.appendChild( productfigureimg );

        productinfo.appendChild( productinfodiv );
        productinfo.appendChild( productinfofigure );

        productcard.appendChild( productimg );
        productcard.appendChild( productinfo );

        cardscontainer.appendChild( productcard );
    }

}

function openProductoDetails () {
    const isMobileMenuClosed = mobileMenu.classList.contains( 'inactive' );
    const isDesktopMenuClosed = desktopMenu.classList.contains( 'inactive' );
    const isProductDetail = productdetail.classList.contains( 'inactive' );

    if ( !isProductDetail )
    {
        productdetail.classList.add( 'inactive' );
    }

    if ( !isMobileMenuClosed )
    {
        mobileMenu.classList.add( 'inactive' );
    }

    if ( !isDesktopMenuClosed )
    {
        desktopMenu.classList.add( 'inactive' );
    }

    productodetail.classList.remove('inactive');
    mainContainer.classList.add('inactive')

}

function closeProducotDetails() {
    productodetail.classList.add('inactive');
    mainContainer.classList.remove( 'inactive' );
}

renderProduct( productsList );