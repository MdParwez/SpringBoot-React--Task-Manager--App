package com.example.taskmanager.dto;

import lombok.Data;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Data
public class TaskDTO {

    private String id;

    @NotBlank(message = "Title is mandatory")
    private String title;

    private String description;

    private LocalDateTime dueDate;

    private boolean completed;

    private String priority;

    private String category;
}
