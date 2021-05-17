import React from 'react';
import { getAllByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsArticles from './NewsArticles';

describe('News Articles Container', () => {
    it('shows a list of quotes by topic' , async () => {
        render(<NewsArticles />);

        screen.getByText('Loading...');
        
        const ul = await screen.findByRole('list', { name: 'articles' });
        expect(ul).not.toBeEmptyDOMElement();

        const input = await screen.findByLabelText('Article Name');
        userEvent.type(input, 'topic');

        const submitButton = await screen.findAllByRole('button', {
            name: 'find-articles',
        })
        userEvent.click(submitButton);

        return waitFor(() => {
            const quotes = screen.getAllByAltText('- topic', { exact: false });
            expect(articles).toHaveLength(5)
        });
    });
});