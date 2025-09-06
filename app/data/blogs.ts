export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable E-commerce with MERN Stack",
    description: "Learn how to build a full-featured multilingual e-commerce platform using MongoDB, Express.js, React, and Node.js. From PayPal integration to Redux state management.",
    content: `# Building Scalable E-commerce with MERN Stack

Building a modern e-commerce platform requires careful consideration of scalability, user experience, and internationalization. In this comprehensive guide, I'll share my experience developing the Techsouq multilingual e-commerce platform using the MERN stack.

## Project Overview

The Techsouq platform was designed to serve both buyers and sellers in multiple regions, requiring robust architecture and thoughtful user experience design. The platform needed to handle multilingual content, secure payments, and complex state management.

## Technology Stack

### Frontend
- **React.js**: Component-based architecture for reusable UI elements
- **Redux.js**: Centralized state management for complex application state
- **React Router**: Dynamic routing for seamless navigation
- **TypeScript**: Type safety and better development experience
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **i18n**: Internationalization for multilingual support

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for flexible data storage
- **JWT**: Authentication and authorization
- **PayPal API**: Payment processing integration

## Database Schema Design

The MongoDB schema was designed to support both buyer and seller roles:

\`\`\`javascript
// User Schema
const userSchema = {
  email: String,
  password: String,
  role: ['buyer', 'seller', 'admin'],
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
    language: String,
    currency: String
  },
  addresses: [AddressSchema],
  createdAt: Date,
  updatedAt: Date
}

// Product Schema
const productSchema = {
  title: { en: String, ar: String, fr: String },
  description: { en: String, ar: String, fr: String },
  price: Number,
  currency: String,
  category: String,
  images: [String],
  seller: { type: ObjectId, ref: 'User' },
  stock: Number,
  variants: [VariantSchema],
  reviews: [ReviewSchema]
}
\`\`\`

## Redux State Management

Implementing Redux for complex state management was crucial for handling:

\`\`\`javascript
// Redux Store Structure
const store = {
  auth: {
    user: null,
    isAuthenticated: false,
    loading: false
  },
  cart: {
    items: [],
    total: 0,
    currency: 'USD'
  },
  products: {
    items: [],
    filters: {},
    search: '',
    loading: false
  },
  ui: {
    language: 'en',
    theme: 'light',
    sidebar: false
  }
}
\`\`\`

## PayPal Integration

Secure payment processing was implemented using PayPal's REST API:

\`\`\`javascript
// PayPal Payment Handler
const handlePayPalPayment = async (orderData) => {
  try {
    const payment = await paypal.payment.create({
      intent: 'sale',
      payer: { payment_method: 'paypal' },
      transactions: [{
        amount: {
          total: orderData.total,
          currency: orderData.currency
        },
        description: 'Purchase from Techsouq'
      }],
      redirect_urls: {
        return_url: \`\${process.env.CLIENT_URL}/payment/success\`,
        cancel_url: \`\${process.env.CLIENT_URL}/payment/cancel\`
      }
    });
    
    return payment;
  } catch (error) {
    console.error('PayPal payment error:', error);
    throw error;
  }
};
\`\`\`

## Multilingual Support

Using i18n for internationalization allowed us to serve content in multiple languages:

\`\`\`javascript
// i18n Configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
      fr: { translation: frTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });
\`\`\`

## React Component Example

Here's an example of a responsive product card component:

\`\`\`jsx
// Responsive Product Card
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div className="aspect-w-1 aspect-h-1 w-full">
      <img 
        src={product.images[0]} 
        alt={product.title[locale]}
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {product.title[locale]}
      </h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description[locale]}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-orange-600">
          {formatPrice(product.price, currency)}
        </span>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
          {t('addToCart')}
        </button>
      </div>
    </div>
  </div>
);
\`\`\`

## Performance Optimization

### Database Optimization
- Implemented proper indexing on frequently queried fields
- Used aggregation pipelines for complex queries
- Implemented caching strategies for frequently accessed data

### Frontend Performance
- Code splitting with React.lazy()
- Image optimization and lazy loading
- Bundle optimization and minification

## Security Considerations

### Authentication & Authorization
- JWT tokens with refresh token rotation
- Role-based access control (RBAC)
- Secure password hashing with bcrypt

### Payment Security
- PCI DSS compliance for payment processing
- Secure communication with PayPal API
- Transaction logging and monitoring

## Results and Impact

The Techsouq platform successfully serves users across multiple regions with different languages and currencies, demonstrating the power and flexibility of the MERN stack for building complex web applications.

Key achievements:
- Multilingual support for three regions
- Secure PayPal payment integration
- Scalable architecture supporting both buyers and sellers
- Responsive design optimized for all devices
- Comprehensive state management with Redux

## Lessons Learned

### State Management
Redux proved essential for managing complex application state, but it's important to:
- Keep actions and reducers simple
- Use Redux Toolkit for boilerplate reduction
- Implement proper error handling

### Internationalization
- Plan for i18n from the beginning
- Use translation keys consistently
- Consider RTL languages (Arabic) in design

### Performance
- Optimize images and assets
- Implement proper caching strategies
- Monitor and optimize database queries

## Conclusion

Building a scalable e-commerce platform with the MERN stack requires careful planning and attention to detail. The combination of React for the frontend, Node.js for the backend, MongoDB for data storage, and Express.js for the API layer provides a powerful foundation for modern web applications.

The Techsouq platform successfully demonstrates how modern web technologies can be used to create robust, scalable, and user-friendly e-commerce solutions that serve diverse global markets.`,
    date: "Dec 15, 2024",
    readTime: "12min read",
    tags: ["MERN Stack", "E-commerce", "React.js", "Node.js", "MongoDB"],
    slug: "building-scalable-ecommerce-mern-stack",
    featured: true
  },
  {
    id: "2",
    title: "Modernizing Legacy .NET Applications with Modern Frontend",
    description: "Discover how to refactor and modernize legacy .NET applications using Razor Pages, Dapper, and modern frontend technologies like TailwindCSS and Alpine.js.",
    content: `# Modernizing Legacy .NET Applications with Modern Frontend

Legacy applications often suffer from outdated UI/UX, poor performance, and maintenance challenges. In this article, I'll share my experience modernizing internal HR systems at Giza Power Industry using .NET technologies and modern frontend frameworks.

## The Challenge

The existing HR systems were built with older .NET technologies and had several issues:
- Outdated user interface
- Poor mobile responsiveness
- Slow query performance
- Difficult maintenance
- Limited user experience

## Technology Stack

### Backend
- **.NET Core**: Modern .NET framework
- **Razor Pages**: Server-side rendering with C#
- **Dapper**: Lightweight ORM for data access
- **SQL Server**: Relational database
- **Entity Framework**: For complex queries

### Frontend
- **TailwindCSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework
- **Chart.js**: Data visualization
- **TypeScript**: Type safety and better development

## Database Optimization

The first step was optimizing the database queries and schema:

\`\`\`csharp
// Before: Inefficient N+1 queries
public async Task<List<Employee>> GetEmployeesWithDepartments()
{
    var employees = await _context.Employees.ToListAsync();
    foreach (var employee in employees)
    {
        employee.Department = await _context.Departments
            .FirstOrDefaultAsync(d => d.Id == employee.DepartmentId);
    }
    return employees;
}

// After: Optimized with Dapper
public async Task<List<Employee>> GetEmployeesWithDepartments()
{
    const string sql = @"
        SELECT e.*, d.Name as DepartmentName, d.Code as DepartmentCode
        FROM Employees e
        LEFT JOIN Departments d ON e.DepartmentId = d.Id
        ORDER BY e.LastName, e.FirstName";
    
    return await _connection.QueryAsync<Employee>(sql);
}
\`\`\`

## Razor Pages Implementation

Razor Pages provided a clean separation of concerns:

\`\`\`csharp
// EmployeeList.cshtml.cs
public class EmployeeListModel : PageModel
{
    private readonly IEmployeeService _employeeService;
    
    public List<Employee> Employees { get; set; }
    public EmployeeFilter Filter { get; set; }
    
    public async Task<IActionResult> OnGetAsync(EmployeeFilter filter)
    {
        Filter = filter;
        Employees = await _employeeService.GetEmployeesAsync(filter);
        return Page();
    }
    
    public async Task<IActionResult> OnPostAsync(int employeeId)
    {
        await _employeeService.UpdateEmployeeAsync(employeeId);
        return RedirectToPage();
    }
}
\`\`\`

## Modern UI with TailwindCSS

TailwindCSS enabled rapid UI development:

\`\`\`html
<!-- Employee Card Component -->
<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
    <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" src="@employee.AvatarUrl" alt="@employee.FullName">
        </div>
        <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
                @employee.FullName
            </p>
            <p class="text-sm text-gray-600 truncate">
                @employee.Position
            </p>
        </div>
        <div class="flex-shrink-0">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium @(employee.Status == "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")">
                @employee.Status
            </span>
        </div>
    </div>
</div>
\`\`\`

## Interactive Features with Alpine.js

Alpine.js provided lightweight interactivity:

\`\`\`html
<!-- Interactive Employee Search -->
<div x-data="employeeSearch()" class="mb-6">
    <div class="flex space-x-4">
        <input 
            x-model="searchTerm" 
            @input.debounce.300ms="searchEmployees()"
            type="text" 
            placeholder="Search employees..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
        <select 
            x-model="departmentFilter"
            @change="searchEmployees()"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
            <option value="">All Departments</option>
            <template x-for="dept in departments" :key="dept.id">
                <option :value="dept.id" x-text="dept.name"></option>
            </template>
        </select>
    </div>
    
    <div x-show="loading" class="mt-4 text-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
    </div>
    
    <div x-show="!loading" class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <template x-for="employee in filteredEmployees" :key="employee.id">
            <div class="bg-white rounded-lg shadow p-4">
                <h3 x-text="employee.fullName" class="font-semibold text-gray-900"></h3>
                <p x-text="employee.position" class="text-sm text-gray-600"></p>
            </div>
        </template>
    </div>
</div>
\`\`\`

## Data Visualization with Chart.js

Chart.js provided beautiful data visualizations:

\`\`\`javascript
// Employee Statistics Chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('employeeChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active', 'On Leave', 'Terminated'],
            datasets: [{
                data: [@Model.ActiveCount, @Model.OnLeaveCount, @Model.TerminatedCount],
                backgroundColor: [
                    '#10B981', // Green
                    '#F59E0B', // Yellow
                    '#EF4444'  // Red
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});
\`\`\`

## Performance Improvements

### Query Optimization
- Reduced query response times by 15%
- Implemented proper indexing
- Used Dapper for lightweight data access
- Implemented caching for frequently accessed data

### Frontend Performance
- Lazy loading for large datasets
- Debounced search inputs
- Optimized bundle sizes
- Implemented service workers for caching

## Security Enhancements

### Authentication & Authorization
- Implemented role-based access control
- Added session management
- Implemented secure password policies
- Added audit logging

### Data Protection
- Input validation and sanitization
- SQL injection prevention with parameterized queries
- XSS protection
- CSRF token implementation

## Results and Impact

### User Experience
- 40% improvement in user satisfaction
- Reduced training time for new users
- Improved mobile accessibility
- Faster task completion

### Performance
- 15% reduction in query response times
- 30% improvement in page load times
- Better scalability for concurrent users
- Reduced server resource usage

### Maintenance
- Easier code maintenance
- Faster bug fixes
- Better documentation
- Improved developer onboarding

## Best Practices Learned

### Migration Strategy
- Plan incremental migrations
- Maintain backward compatibility
- Test thoroughly at each stage
- Have rollback plans ready

### Technology Selection
- Choose appropriate tools for the job
- Consider team expertise
- Plan for future scalability
- Balance performance and maintainability

## Conclusion

Modernizing legacy applications requires careful planning and execution. The combination of .NET Core, Razor Pages, Dapper, and modern frontend technologies provides a powerful foundation for building maintainable and scalable applications.

The modernization project at Giza Power Industry successfully transformed outdated HR systems into modern, efficient, and user-friendly applications, demonstrating the value of investing in technology upgrades.`,
    date: "Dec 10, 2024",
    readTime: "15min read",
    tags: [".NET", "Razor Pages", "Dapper", "TailwindCSS", "Alpine.js"],
    slug: "modernizing-legacy-dotnet-applications",
    featured: true
  },
  {
    id: "3",
    title: "Building API Documentation with React and TypeScript",
    description: "Learn how to create comprehensive API documentation sites using React, TypeScript, and TanStack Router. From structured content management to interactive examples.",
    content: `# Building API Documentation with React and TypeScript

Creating comprehensive and user-friendly API documentation is crucial for developer adoption and successful API integration. In this article, I'll share my experience building a modern API documentation site using React, TypeScript, and TanStack Router.

## Project Overview

The API documentation site needed to serve multiple audiences:
- Frontend developers integrating with APIs
- Backend developers understanding system architecture
- Product managers reviewing API capabilities
- QA teams testing API endpoints

## Technology Stack

### Frontend
- **React 18**: Latest React features and performance improvements
- **TypeScript**: Type safety and better development experience
- **TanStack Router**: Modern client-side routing with type safety
- **TailwindCSS**: Utility-first styling
- **Prism.js**: Syntax highlighting
- **react-syntax-highlighter**: Enhanced code display

### Content Management
- **JSON-based CMS**: Structured content management
- **Markdown support**: Rich text formatting
- **Dynamic routing**: Automatic page generation

## TypeScript Interfaces

Strong typing ensured consistency across the application:

\`\`\`typescript
interface DocumentationSection {
  id: string;
  title: string;
  description: string;
  pages: DocumentationPage[];
}

interface DocumentationPage {
  id: string;
  title: string;
  content: string;
  examples: CodeExample[];
  tags: string[];
  lastUpdated: string;
}

interface CodeExample {
  language: string;
  code: string;
  description?: string;
}

interface BreadcrumbItem {
  title: string;
  path: string;
  isActive: boolean;
}
\`\`\`

## TanStack Router Configuration

Type-safe routing with automatic route generation:

\`\`\`typescript
import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';

// Root route
const rootRoute = createRootRoute({
  component: RootComponent,
});

// Documentation route with dynamic segments
const documentationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/docs/$sectionId/$pageId?',
  component: DocumentationPage,
  loader: async ({ params }) => {
    const { sectionId, pageId } = params;
    return await loadDocumentationContent(sectionId, pageId);
  },
});

// Search route
const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: SearchPage,
});

const routeTree = rootRoute.addChildren([
  documentationRoute,
  searchRoute,
]);

export const router = createRouter({ routeTree });
\`\`\`

## Dynamic Content Loading

Content was loaded dynamically based on the current route:

\`\`\`typescript
// Content loader
export async function loadDocumentationContent(
  sectionId: string, 
  pageId?: string
): Promise<DocumentationData> {
  try {
    const response = await fetch('/api/documentation');
    const allContent = await response.json();
    
    const section = allContent.sections.find(s => s.id === sectionId);
    if (!section) {
      throw new Error('Section not found');
    }
    
    const page = pageId 
      ? section.pages.find(p => p.id === pageId)
      : section.pages[0];
    
    return {
      section,
      page,
      breadcrumbs: generateBreadcrumbs(section, page),
      navigation: generateNavigation(allContent.sections, sectionId)
    };
  } catch (error) {
    console.error('Error loading documentation:', error);
    throw error;
  }
}
\`\`\`

## Interactive Code Examples

Code examples with syntax highlighting and copy functionality:

\`\`\`typescript
// CodeExample component
interface CodeExampleProps {
  example: CodeExample;
  language: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ example, language }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(example.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };
  
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-sm text-gray-300">{language}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="p-4">
        <SyntaxHighlighter
          language={language}
          style={vsCodeDarkPlus}
          customStyle={{
            margin: 0,
            backgroundColor: 'transparent',
            fontSize: '14px'
          }}
        >
          {example.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
\`\`\`

## Real-time Search

Implemented search functionality with debouncing and highlighting:

\`\`\`typescript
// Search hook
export function useDocumentationSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  
  const debouncedSearch = useMemo(
    () => debounce(async (term: string) => {
      if (!term.trim()) {
        setResults([]);
        return;
      }
      
      setLoading(true);
      try {
        const response = await fetch(\`/api/search?q=\${encodeURIComponent(term)}\`);
        const searchResults = await response.json();
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );
  
  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);
  
  return {
    searchTerm,
    setSearchTerm,
    results,
    loading
  };
}
\`\`\`

## Breadcrumb Navigation

Dynamic breadcrumb generation with proper navigation:

\`\`\`typescript
// Breadcrumb component
const BreadcrumbNavigation: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link to="/" className="hover:text-gray-900 transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={item.path} className="flex items-center">
          <ChevronRightIcon className="h-4 w-4 mx-2" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.title}</span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-gray-900 transition-colors"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

// Breadcrumb generation
function generateBreadcrumbs(
  section: DocumentationSection, 
  page: DocumentationPage
): BreadcrumbItem[] {
  return [
    {
      title: section.title,
      path: \`/docs/\${section.id}\`,
      isActive: false
    },
    {
      title: page.title,
      path: \`/docs/\${section.id}/\${page.id}\`,
      isActive: true
    }
  ];
}
\`\`\`

## Performance Optimization

### Code Splitting
- Route-based code splitting
- Lazy loading of heavy components
- Dynamic imports for non-critical features

### Caching Strategy
- Service worker for offline access
- Browser caching for static assets
- API response caching

### Bundle Optimization
- Tree shaking for unused code
- Minification and compression
- Image optimization

## Results and Impact

### Developer Adoption
- 60% increase in API usage
- Reduced support requests
- Faster integration times

### User Experience
- Improved navigation
- Better search functionality
- Mobile-friendly design

### Maintenance
- Easier content updates
- Reduced development time
- Better scalability

## Best Practices

### Content Organization
- Logical information architecture
- Consistent naming conventions
- Clear navigation structure

### Code Quality
- Type safety with TypeScript
- Component reusability
- Performance optimization

### User Experience
- Responsive design
- Accessibility compliance
- Fast loading times

## Conclusion

Building comprehensive API documentation requires careful planning and modern tooling. The combination of React, TypeScript, and TanStack Router provides a powerful foundation for creating maintainable and scalable documentation sites.

The API documentation site successfully serves developers with clear, comprehensive, and interactive documentation, improving API adoption and reducing support overhead.`,
    date: "Dec 5, 2024",
    readTime: "18min read",
    tags: ["React", "TypeScript", "TanStack Router", "API Documentation", "Prism.js"],
    slug: "building-api-documentation-react-typescript",
    featured: false
  }
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(blog => blog.slug === slug);
};

export const getFeaturedBlogs = (): BlogPost[] => {
  return blogPosts.filter(blog => blog.featured);
};

export const getAllBlogs = (): BlogPost[] => {
  return blogPosts;
}; 