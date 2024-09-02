package com.example.taskmanager.repository;

import com.example.taskmanager.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {

    List<Task> findByCategory(String category);

    List<Task> findByCompleted(boolean completed);

    List<Task> findByDueDateBefore(LocalDateTime dueDate);
}

