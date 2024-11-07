import { createSlice } from '@reduxjs/toolkit';

//! initial state fetched from firestore
const initialState = {
    reinforcedScreed: {
        density: 1800,
        thermalConductivity: 0.93
    },
    thermalInsulation: {
        density: 20,
        thermalConductivity: 0.033
    },
    levelingScreed: {
        density: 1800,
        thermalConductivity: 0.87
    },
    steelConcreteSlab: {
        density: 2500,
        thermalConductivity: 1.63
    },
    mortarAndPutty: {
        density: 1800,
        thermalConductivity: 0.41
    },
    hydroInsulation: {
        density: 1050,
        thermalConductivity: 0.17
    },
    thermalResistance: null
};

const constantsSlice = createSlice({
    name: 'constants',
    initialState,
    reducers: {
        calculateThermalResistance: (state, action) => {
            const { thickness, materialType } = action.payload;
            const material = state[materialType];
            if (material) {
                const thermalConductivity = material.thermalConductivity;
                state.thermalResistance = (thickness / 100) / thermalConductivity;
            } else {
                state.thermalResistance = null;
            }
        }
    },
});

export const { calculateThermalResistance } = constantsSlice.actions;

export default constantsSlice.reducer;


//? Example usage in component
/**
 * import {useDispatch, useSelector} from 'react-redux';
 * import {calculateThermalResistance} from './constantsSlice';
 * 
 * const dispatch = useDispatch();
 //! When user enters value in the thickness cell, dispatch action to calculate thermal resistance and fill the result
 * dispatch(calculateThermalResistance({thickness: 10, materialType: 'steelConcreteSlab'}));
 * 
 * const thermalResistance = useSelector(state => state.constants.thermalResistance);
 */