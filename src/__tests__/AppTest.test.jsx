import { render, screen } from '@testing-library/react'
import Home from '../components/list';

const mockData = [
  {
      "id": 1,
      "title": "Fletcher",
      "url": "https://www.nytimes.com/2024/03/24/world/asia/india-sugar-cane-fields-child-labor-hysterectomies.html"
    }, {
      "id": 2,
      "title": "Clarice",
      "url": "https://www.nytimes.com/2024/03/24/world/asia/india-sugar-cane-fields-child-labor-hysterectomies.html"
    }, 
]

test("List renders successfully", () => {
  render(<Home data={mockData} />)
  expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
})