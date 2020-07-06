import React, { useCallback } from 'react';

function getHistogram(image: ImageData): number[] {
    const histogram = [1, 2, 3];
    // computations
    console.log('Calculating a histogram');
    return histogram;
}

export const Histograms = () => {
    const imageData: ImageData = new ImageData(1, 1);
    const getHistogramData = useCallback(() => getHistogram(imageData), [imageData]);
    const histogram = getHistogramData();
    return <>
        <p>First element in histogram: {histogram[0]}</p>
    </>
}
