import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions= [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Open gym hours only"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes",
                "Extended gym hours"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 69.99,
            "features": [
                "24/7 gym access",
                "Personal training session (1 per month)",
                "Group fitness classes",
                "Sauna & steam room access",
                "Free guest pass (1 per month)"
            ]
        },
        {
            "id": 4,
            "name": "Elite Plan",
            "price": 99.99,
            "features": [
                "Unlimited personal training",
                "24/7 gym access",
                "VIP locker room access",
                "Sauna & steam room access",
                "Free guest pass (4 per month)",
                "Nutritional consultation"
            ]
        }
    ]

    return (
        <div>
                <h2>Best Price in the Town</h2>
            {
                priceOptions.map(price=> <PriceOption key={price.id} price={price}></PriceOption>)
            }

        </div>
    );
};

export default PriceOptions;