# Refactor Guide: Centralized Config Management

## Tổng quan thay đổi

Đã refactor ứng dụng để:

- ✅ Gọi API tập trung ở `page.tsx`
- ✅ Truyền data xuống components thông qua props
- ✅ Loại bỏ việc mỗi component tự gọi API riêng
- ✅ Thêm loading states và error handling

## Cấu trúc mới

### 1. Types (`src/types/config.ts`)

```typescript
export interface ConfigData {
  readonly contract_address: string;
  readonly pump_fun_url: string;
  readonly x_link: string;
  readonly instagram_link: string;
  readonly tiktok_link: string;
}

export interface ComponentProps {
  config: ConfigData | null;
  isLoading?: boolean;
}
```

### 2. Custom Hook (`src/hooks/useConfig.ts`)

- Quản lý việc fetch config data
- Cung cấp loading, error states
- Có function `refetch()` để thử lại

### 3. Main Page (`src/app/page.tsx`)

- Sử dụng `useConfig()` hook
- Truyền `config` và `isLoading` xuống tất cả components
- Xử lý error state với retry button

### 4. Components đã cập nhật

Tất cả components giờ nhận props:

- `Header` - nhận config props
- `MainSection` - hiển thị contract address với loading state
- `AboutSection` - nhận config props
- `EvolutionSection` - nhận config props
- `TokenomicsSection` - nhận config props
- `Footer` - sử dụng config cho social links và buy button

## Lợi ích

### ✅ Performance

- Chỉ 1 API call thay vì nhiều calls
- Tránh duplicate requests
- Faster loading

### ✅ User Experience

- Consistent loading states
- Better error handling
- Retry functionality

### ✅ Code Quality

- Centralized data management
- Reusable types và hooks
- Easier to maintain

### ✅ SEO & Caching

- Single API endpoint
- Better caching strategy
- Reduced server load

## Cách sử dụng

### Thêm field mới vào config:

1. Cập nhật `ConfigData` interface trong `src/types/config.ts`
2. Component sẽ tự động nhận field mới qua props
3. Sử dụng: `config?.new_field`

### Thêm component mới:

```typescript
import { ComponentProps } from "@/types/config";

const NewComponent: React.FC<ComponentProps> = ({ config, isLoading }) => {
  return <div>{isLoading ? "Loading..." : config?.some_field}</div>;
};
```

### Sử dụng trong page:

```typescript
<NewComponent config={config} isLoading={isLoading} />
```

## Migration từ cũ sang mới

### Trước (mỗi component tự fetch):

```typescript
// Trong component
const [config, setConfig] = useState(null);
useEffect(() => {
  fetch('/api/config').then(...)
}, []);
```

### Sau (nhận props):

```typescript
// Trong component
const MyComponent: React.FC<ComponentProps> = ({ config, isLoading }) => {
  // Sử dụng config trực tiếp
  return <div>{config?.field}</div>;
};

// Trong page.tsx
const { config, isLoading } = useConfig();
<MyComponent config={config} isLoading={isLoading} />;
```

## Testing

Để test components:

```typescript
const mockConfig = {
  contract_address: "test-address",
  pump_fun_url: "https://test.com",
  // ...
};

render(<Component config={mockConfig} isLoading={false} />);
```
