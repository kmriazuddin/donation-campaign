import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import { BsCurrencyDollar } from 'react-icons/bs';

const Donation = () => {
    const donations = useLoaderData();
    const [storedDonationDetails, setStoredDonationDetails] = useState([]);
    useEffect(() => {
        const storedDonation = getStoredDonation();
        if (donations.length > 0) {

            const donationStoredDet = [];
            for (const id of storedDonation) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    donationStoredDet.push(donation)
                }
            }

            setStoredDonationDetails(donationStoredDet);
        }
    }, [donations])
    return (
        <div>
            <h1 className="text-4xl font-semibold my-5">Donation: {storedDonationDetails.length}</h1>
            <ul className="grid grid-cols-2 gap-5">
                {
                    storedDonationDetails.map(donation => <li key={donation.id}>
                        <div className="flex gap-5 my-5 items-center border rounded-lg">
                            <img src={donation.img} alt="" />
                            <div>
                                <h2 className="text-2xl font-semibold">{donation.title}</h2>
                                <p className="text-xl font-semibold">{donation.description}</p>
                                <p className="flex items-center gap-1 font-semibold"><BsCurrencyDollar></BsCurrencyDollar>{donation.donation}</p>
                                <div className="my-3">
                                    <Link ><button className="btn btn-primary">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Donation;