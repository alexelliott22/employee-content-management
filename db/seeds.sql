INSERT INTO departments (name)
VALUES
    ('Accounting'),
    ('Sales'),
    ('Finance'),
    ('IT'),
    ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Manager', 100000, 1),
    ('Senior', 65000, 1),
    ('Staff', 50000, 1),
    ('Manager', 100000, 2),
    ('Senior', 65000, 2),
    ('Staff', 50000, 2),
    ('Manager', 100000, 3),
    ('Senior', 65000, 3),
    ('Staff', 50000, 3),
    ('Manager', 100000, 4),
    ('Senior', 65000, 4),
    ('Staff', 50000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
    ('Peter', 'Greenaway', 1, NULL),
    ('Heathcote', 'Williams', 4, NULL),
    ('Sissy', 'Coalpits', 7, NULL),
    ('Samuel', 'Johnson', 10, NULL),
    ('James', 'Fraser', 12, 1),
    ('Jack', 'London', 8, 1),
    ('Robert', 'Bruce', 5, 1),
    ('Derek', 'Jarman', 6, 1),
    ('Paolo', 'Pasolini', 12, 2),
    ('Sandy', 'Powell', 2, 2),
    ('Emil', 'Zola', 8, 2),
    ('Antoinette', 'Capet', 9, 2),
    ('Samuel', 'Delany', 3, 3),
    ('Tony', 'Duvert', 3, 3),
    ('Dennis', 'Cooper', 12, 3),
    ('Monica', 'Bellucci', 11, 3),
    ('John', 'Dryden', 9, 4),
    ('Alexander', 'Pope', 11, 4),
    ('Lionel', 'Johnson', 11, 4),
    ('Aubrey', 'Beardsley', 2, 4);