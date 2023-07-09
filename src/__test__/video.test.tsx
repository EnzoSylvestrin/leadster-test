import '@testing-library/jest-dom';

import 'intersection-observer';

import { render, screen, waitFor } from '@testing-library/react';
import VideosSection from '../components/sections/Videos/Videos';

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve([
                {
                    id: '1',
                    title: 'Video 1',
                    image: 'image-url-1',
                    url: 'video-url-1',
                },
                {
                    id: '2',
                    title: 'Video 2',
                    image: 'image-url-2',
                    url: 'video-url-2',
                },
            ]),
    })
) as any;

describe('VideosSection', () => {
    beforeEach(() => {
        render(<VideosSection />);
    });

    it('should fetch and display videos', async () => {
        // Wait for the fetch call and video rendering
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(screen.getByText('Video 1')).toBeInTheDocument();
            expect(screen.getByText('Video 2')).toBeInTheDocument();
        });
    });
});
