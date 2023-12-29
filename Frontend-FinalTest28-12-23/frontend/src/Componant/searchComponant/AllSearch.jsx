import React from 'react'
import SalarySearchByRange from './SalarySearchByRange'
import SalaryByDepartmentSearch from './SalaryByDepartmentSearch '
import EmployeeSearch from './EmployeeSearch'

export default function AllSearch() {
  return (
    <div>
        <SalarySearchByRange/> 
         <SalaryByDepartmentSearch/>
        <EmployeeSearch/>
    </div>
  )
}
