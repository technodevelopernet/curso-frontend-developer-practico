const navbarEmail = document.querySelector( '.navbar-email' );
const desktopMenu = document.querySelector( '.desktop-menu' );
const mobileMenu = document.querySelector( '.mobile-menu' );
const menuIcon = document.querySelector( '.menu' );
const productdetail = document.querySelector( '.product-detail' );
const navbarshoppingcart = document.querySelector( '.navbar-shopping-cart' );

navbarEmail.addEventListener( 'click', toggleDesktopMenu );
menuIcon.addEventListener( 'click', toggleMobileMenu );
navbarshoppingcart.addEventListener( 'click', toggleProductDetail );

function toggleDesktopMenu ()
{
    const isProductDetail = productdetail.classList.contains( 'inactive' );
    const isMobileMenuClosed = mobileMenu.classList.contains( 'inactive' );

    if ( !isProductDetail )
    {
        productdetail.classList.add( 'inactive' );
    }

    if ( !isMobileMenuClosed )
    {
        mobileMenu.classList.add( 'inactive' );
    }
    desktopMenu.classList.toggle( 'inactive' )
}

function toggleMobileMenu ()
{
    const isProductDetail = productdetail.classList.contains( 'inactive' );
    const isDesktopMenuClosed = desktopMenu.classList.contains( 'inactive' );

    if ( !isProductDetail )
    {
        productdetail.classList.add( 'inactive' );
    }

    if ( !isDesktopMenuClosed )
    {
        desktopMenu.classList.add( 'inactive' );
    }

    mobileMenu.classList.toggle( 'inactive' );

}

function toggleProductDetail ()
{
    const isMobileMenuClosed = mobileMenu.classList.contains( 'inactive' );
    const isDesktopMenuClosed = desktopMenu.classList.contains( 'inactive' );

    if ( !isMobileMenuClosed )
    {
        mobileMenu.classList.add( 'inactive' );
    }

    if ( !isDesktopMenuClosed )
    {
        desktopMenu.classList.add( 'inactive' );
    }

    productdetail.classList.toggle( 'inactive' );

}
