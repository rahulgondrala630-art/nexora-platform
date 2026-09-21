package com.nexora.platform;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@SpringBootTest
class HealthControllerTest {
    @Test void applicationContextLoads() { assertDoesNotThrow(() -> NexoraApplication.class.getName()); }
}
