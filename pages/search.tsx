import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }: { searchResults: SearchResult[] }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate as string), 'dd MMMM yyy');
    const formattedEndDate = format(new Date(endDate as string), 'dd MMMM yyy');
    const dateRange = `${formattedStartDate} to ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${dateRange} | ${noOfGuests}`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>
                        200+ Stays for {noOfGuests} guests from {dateRange}
                    </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <button className='filter-button'>Cancellation Flexibility</button>
                        <button className='filter-button'>Type of Place</button>
                        <button className='filter-button'>Price</button>
                        <button className='filter-button'>Rooms and Beds</button>
                        <button className='filter-button'>More filters</button>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map((item: SearchResult) => (
                            <InfoCard key={item.long * item.lat} info={item} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Search;

export async function getServerSideProps() {
    const searchResults: SearchResult[] = await fetch('https://www.jsonkeeper.com/b/5NPS').then((res) => res.json());

    return {
        props: {
            searchResults,
        },
    };
}
