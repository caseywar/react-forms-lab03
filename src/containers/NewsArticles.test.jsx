import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsArticles from './NewsArticles';
import dotenv from 'dotenv';
dotenv.config();

describe('News Articles Container', () => {
    it('shows a list of quotes by topic' , async () => {
        render(<NewsArticles />);

        screen.getByText('Loading...');
        
        const ul = await screen.findByRole('list');
        expect(ul).not.toBeEmptyDOMElement();
        expect(ul).toMatchSnapshot();

        const input = await screen.findByLabelText('Article Name');
        userEvent.type(input, 'Tesla');
        expect(input).toMatchSnapshot();

        const submitButton = await screen.findAllByRole('button', {name: 'controls'})
        fireEvent.click(screen.getByText('Submit'));
        expect(submitButton).toMatchSnapshot();

        
        const article = await screen.findAllByRole('listitem', { name: 'article' })
        expect(article).toMatchSnapshot();
        });
    });
