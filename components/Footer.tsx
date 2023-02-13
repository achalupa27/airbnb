function Footer() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxury</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Referrals</p>
                <p>Hosts</p>
                <p>Friends</p>
                <p>Hostees</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Learn to Host</p>
                <p>Tips</p>
                <p>Safety</p>
                <p>Guidelines</p>
                <p>Join Now</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust</p>
                <p>Safety</p>
                <p>Contact Us</p>
                <p>Easter Egg</p>
            </div>
        </div>
    );
}

export default Footer;
