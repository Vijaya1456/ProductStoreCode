using ProductStore.Models;
using ProductStore.Repositories;

namespace ProductStore.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;

        public ProductService(IProductRepository repository)
        {
            _repository = repository;
        }

        public Task<IEnumerable<Product>> GetAllAsync() => _repository.GetAllAsync();

        public Task<Product?> GetByIdAsync(int id) => _repository.GetByIdAsync(id);

        public Task<Product> AddAsync(Product product) => _repository.AddAsync(product);

        public async Task<bool> UpdateAsync(Product product)
        {
            var existing = await _repository.GetByIdAsync(product.Id);
            if (existing == null) return false;

            existing.Name = product.Name;
            existing.Price = product.Price;
            await _repository.UpdateAsync(existing);
            return true;
        }

        public Task<bool> DeleteAsync(int id) => _repository.DeleteAsync(id);
    }
}
