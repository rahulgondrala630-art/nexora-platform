package com.nexora.platform.controller;

import com.nexora.platform.model.Workflow;
import com.nexora.platform.service.WorkflowService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/workstreams")
public class WorkflowController {
    private final WorkflowService service;
    public WorkflowController(WorkflowService service) { this.service = service; }
    @GetMapping public List<Workflow> list() { return service.listWorkflows(); }
}
