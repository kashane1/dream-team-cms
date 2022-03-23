INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Legal"),
        ("Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES  (001, "Salesperson", "80000", 1),
        (002, "Sales Manager", "130000", 1),
        (003, "Software Engineer", "120000", 2),
        (004, "Lead Engineer", "170000", 2),
        (005, "Lawyer", "160000", 3),
        (006, "Legal Team Lead", "210000", 3),
        (007, "HR Coordinator", "80000", 4),
        (008, "HR Manager", "130000", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mike", "McKrinkle", 001, 3),
        ("Sally", "Pickles", 001, 3),
        ("Jaxon", "Burton", 002, NULL),
        ("Jennifer", "Johnson", 003, 6),
        ("Kashane", "Sakhakorn", 003, 6),
        ("Vitalik", "Buterin", 004, NULL),
        ("Kevin", "Moss", 005, 6),
        ("Patrick", "Star", 006, NULL),
        ("Molly", "Macy", 007, 8),
        ("Bernard", "Waters", 008, NULL);