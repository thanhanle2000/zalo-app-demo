// FORMAT CURRENCY
export const formatCurrency = (value: number): string => new Intl.NumberFormat('vi-VN').format(value) + 'đ'