INSERT INTO departments (deptartment_name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Legal"),
        ("Human Resources");

INSERT INTO roles (title, salary, department_id11
VALUES  ("Salesperson", "80000", 1),
        ("Sales Manager", "130000", 1),
        ("Software Engineer", "120000", 2),
        ("Lead Engineer", "170000", 2),
        ("Lawyer", "160000", 3),
        ("Legal Team Lead", "210000", 3),
        ("HR Coordinator", "80000", 4),
        ("HR Manager", "130000", 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Mike", "McKrinkle", 1, 3),
        ("Sally", "Pickles", 1, 3),
        ("Jaxon", "Burton", 2, NULL),
        ("Jennifer", "Johnson", 3, 4),
        ("Kashane", "Sakhakorn", 3, 4),
        ("Vitalik", "Buterin", 4, NULL),
        ("Kevin", "Moss", 5, 6),
        ("Patrick", "Star", 6, NULL),
        ("Molly", "Macy", 7, 8),
        ("Bernard", "Waters", 8, NULL);