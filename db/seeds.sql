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
    ('James', 'Fraser', 12, 16),
    ('Jack', 'London', 8, 10),
    ('Robert', 'Bruce', 5, 7),
    ('Peter', 'Greenaway', 1, NULL),
    ('Derek', 'Jarman', 6, 7),
    ('Paolo', 'Pasolini', 12, 16),
    ('Heathcote', 'Williams', 4, NULL),
    ('Sandy', 'Powell', 2, 4),
    ('Emil', 'Zola', 8, 10),
    ('Sissy', 'Coalpits', 7, NULL),
    ('Antoinette', 'Capet', 9, 10),
    ('Samuel', 'Delany', 3, 4),
    ('Tony', 'Duvert', 3, 4),
    ('Dennis', 'Cooper', 12, 16),
    ('Monica', 'Bellucci', 11, 16),
    ('Samuel', 'Johnson', 10, NULL),
    ('John', 'Dryden', 9, 10),
    ('Alexander', 'Pope', 11, 16),
    ('Lionel', 'Johnson', 11, 16),
    ('Aubrey', 'Beardsley', 2, 4);