import { useEffect } from "react";
import { useState } from "react";
import DonationCampaign from "../DonationCampaign/DonationCampaign";

const DonationCard = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    return (
        <div className="my-10 ">
            <h2 className="text-center text-4xl my-5">Donation Campaign Card: {donations.length}</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    donations.map(donations => <DonationCampaign key={donations.id} donations={donations}></DonationCampaign>)
                }
            </div>
        </div>
    );
};

export default DonationCard;