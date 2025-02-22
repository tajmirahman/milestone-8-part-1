import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='border-2 border-black flex flex-col  text-center bg-sky-500 p-4 spacy'>
            <div className='flex-grow'>
                <h2 className='text-6xl font-bold mb-3'>{name}</h2>
                <p className='text-3xl mb-3'>Price-{price}</p>

                <div className='space-y-3 mb-6'>
                    {
                        features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                    }
                </div>
            </div>
            <div className=''>
                <button className='py-2  border-2 border-gray-200 w-full'>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}


export default PriceOption;