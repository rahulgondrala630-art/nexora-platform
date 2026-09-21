package com.nexora.platform.model;

public record Workflow(String id, String title, String owner, String status, String priority, int progress, String due) {}
