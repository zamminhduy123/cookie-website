export class IncrementalID {
    private id = 0;
    getId() {
        return this.id++;
    }
}

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};