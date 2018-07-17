using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MyApp.Data;
using MyApp.Models;

namespace MyApp.service
{
    public class sqlEmployeeData : EmployeeData
    {
        private readonly EmployeeDBContext _Context;
        private readonly ILogger _Logger;

        public sqlEmployeeData(EmployeeDBContext context, ILoggerFactory loggerFactory)
        {
            _Context = context;
            _Logger = loggerFactory.CreateLogger("EmployeesRepository");
        }

        public async Task<Employee> GetEmployeeAsync(int id)
         {
             return await _Context.Employees
                                  .SingleOrDefaultAsync(c => c.id == id);
         }

         public async Task<List<Employee>> GetEmployeesAsync()
         {
             return await _Context.Employees.ToListAsync();
         }
        public async Task<Employee> InsertEmployeeAsync(Employee employee)
        {
            _Context.Add(employee);
            try
            {
                await _Context.SaveChangesAsync();
            }
            catch (System.Exception exp)
            {
                _Logger.LogError($"Error in {nameof(InsertEmployeeAsync)}: " + exp.Message);
            }

            return employee;
        }
        public async Task<bool> DeleteEmployeeAsync(int id)
        { 
            var employee = await _Context.Employees
                                .SingleOrDefaultAsync(c => c.id == id);
            _Context.Remove(employee);
            try
            {
                return (await _Context.SaveChangesAsync() > 0 ? true : false);
            }
            catch (System.Exception exp)
            {
                _Logger.LogError($"Error in {nameof(DeleteEmployeeAsync)}: " + exp.Message);
            }
            return false;
        }
        public async Task<bool> UpdateEmployeeAsync(Employee employee)
        {
            //Will update all properties of the Customer
            _Context.Employees.Attach(employee);
            _Context.Entry(employee).State = EntityState.Modified;
            try
            {
                return (await _Context.SaveChangesAsync() > 0 ? true : false);
            }
            catch (Exception exp)
            {
                _Logger.LogError($"Error in {nameof(UpdateEmployeeAsync)}: " + exp.Message);
            }
            return false;
        }
    }
}