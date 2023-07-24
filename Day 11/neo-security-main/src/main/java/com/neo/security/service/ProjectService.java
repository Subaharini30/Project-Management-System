package com.neo.security.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.dto.EmployeeProjectDto;
import com.neo.security.dto.ProjectDto;
import com.neo.security.entity.Employee;
import com.neo.security.entity.Project;
import com.neo.security.repository.ProjectRepo;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepo projectRepository;

	public void saveProject(ProjectDto pd) 
	{
		Project project = new Project();
		project.setPId(pd.getPId());
		project.setPName(pd.getPName());
		project.setPDescription(pd.getPDescription());
		project.setPBudget(pd.getPBudget());
		project.setPStdate(pd.getPStdate());
		project.setPEndate(pd.getPEndate());

		List<Employee> employee = new ArrayList<>();
		for (EmployeeProjectDto epd : pd.getEp()) 
		{
			Employee emp = new Employee();
			emp.setEmpId(epd.getEmpId());
			emp.setEmpName(epd.getEmpName());
			emp.setEmpMail(epd.getEmpMail());
			emp.setProject(project);
			employee.add(emp);
		}
		project.setEmployee(employee);
		projectRepository.save(project);
	}

	public List<ProjectDto> getAllProjects() {
		List<Project> project = projectRepository.findAll();
        List<ProjectDto> pd = new ArrayList<>();

        for (Project pro : project) 
        {
            ProjectDto projectdto = new ProjectDto();
            projectdto.setPId(pro.getPId());
            projectdto.setPName(pro.getPName());
            projectdto.setPDescription(pro.getPDescription());
            projectdto.setPBudget(pro.getPBudget());
            projectdto.setPEndate(pro.getPEndate());
            projectdto.setPStdate(pro.getPStdate());
            
            List<EmployeeProjectDto> epd=new ArrayList<>();
            for(Employee emp:pro.getEmployee())
            {
            	EmployeeProjectDto epds=new EmployeeProjectDto();
            	epds.setEmpId(emp.getEmpId());
            	epds.setEmpMail(emp.getEmpMail());
            	epds.setEmpName(emp.getEmpName());
            	epd.add(epds);
            }
            projectdto.setEp(epd);
            pd.add(projectdto);
        }
		return pd;
	
	}
		
	public ProjectDto getProjectById(int pId) {
		Optional<Project> proOpt = projectRepository.findById(pId);
		ProjectDto projectdto = new ProjectDto();
		if (proOpt.isPresent()) {
			Project pro = proOpt.get();
			projectdto.setPId(pro.getPId());
			projectdto.setPName(pro.getPName());
			projectdto.setPDescription(pro.getPDescription());
			projectdto.setPBudget(pro.getPBudget());
			projectdto.setPEndate(pro.getPEndate());
			projectdto.setPStdate(pro.getPStdate());

			List<EmployeeProjectDto> epd = new ArrayList<>();
			for (Employee emp : pro.getEmployee()) {
				EmployeeProjectDto epds = new EmployeeProjectDto();
				epds.setEmpId(emp.getEmpId());
				epds.setEmpMail(emp.getEmpMail());
				epds.setEmpName(emp.getEmpName());
				epd.add(epds);
			}
			projectdto.setEp(epd);

		}
		return projectdto;
	}

	public void updateProject(ProjectDto pd) {
		Optional<Project> proOpt = projectRepository.findById(pd.getPId());
		if (proOpt.isPresent()) {
			Project project = proOpt.get();
			project.setPId(pd.getPId());
			project.setPName(pd.getPName());
			project.setPDescription(pd.getPDescription());
			project.setPBudget(pd.getPBudget());
			project.setPStdate(pd.getPStdate());
			project.setPEndate(pd.getPEndate());

			List<Employee> employee = new ArrayList<>();
			for (EmployeeProjectDto epd : pd.getEp()) {
				Employee emp = new Employee();
				emp.setEmpId(epd.getEmpId());
				emp.setEmpName(epd.getEmpName());
				emp.setEmpMail(epd.getEmpMail());
				emp.setProject(project);
				employee.add(emp);
			}
			project.setEmployee(employee);
			projectRepository.save(project);
		}
	}

	public void deleteProject(int pId) {
		projectRepository.deleteById(pId);
	}
}

