import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Header from '../components/Header';

describe("Header", () => {
    it("should render the header component", () => {
        render(<Header />);
        screen.debug();
    });
})