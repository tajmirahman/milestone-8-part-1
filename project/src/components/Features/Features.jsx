import PropTypes from 'prop-types';
import { IoCheckmarkDone } from "react-icons/io5";

const Features = ({feature}) => {
    return (
        <div className='flex  items-center gap-2'>
            <IoCheckmarkDone />
            <p>{feature}</p>
        </div>
    );
};

Features.propTypes={
    feature:PropTypes.object.isRequired
}

export default Features;