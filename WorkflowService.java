package com.nexora.platform.service;

import com.nexora.platform.model.Workflow;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WorkflowService {
    public List<Workflow> listWorkflows() {
        return List.of(
            new Workflow("nexora-01", "Workspace onboarding", "Maya Chen", "On track", "High", 78, "Today"),
            new Workflow("nexora-02", "Usage insights", "Rahul Gondrala", "At risk", "High", 52, "Tomorrow"),
            new Workflow("nexora-03", "API reliability", "Jordan Lee", "On track", "Medium", 91, "Sep 25")
        );
    }
}
