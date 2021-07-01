INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Sales'),
    ('Finance'),
    ('IT'),
    ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Partner', 500000, 1),
    ('Manager', 100000, 1),
    ('Senior', 65000, 1),
    ('Staff', 50000, 1),
    ('Partner', 500000, 2),
    ('Manager', 100000, 2),
    ('Senior', 65000, 2),
    ('Staff', 50000, 2),
    ('Partner', 500000, 3),
    ('Manager', 100000, 3),
    ('Senior', 65000, 3),
    ('Staff', 50000, 3),
    ('Partner', 500000, 4),
    ('Manager', 100000, 4),
    ('Senior', 65000, 4),
    ('Staff', 50000, 4);

INSERT INTO employee(first_name, last_name, role_id)
VALUES
    ('James', 'Fraser', 16),
    ('Jack', 'London', 8),
    ('Robert', 'Bruce', 5),
    ('Peter', 'Greenaway', 4),
    ('Derek', 'Jarman', 4),
    ('Paolo', 'Pasolini', 16),
    ('Heathcote', 'Williams', 16),
    ('Sandy', 'Powell', 2),
    ('Emil', 'Zola', 8),
    ('Sissy', 'Coalpits', 7),
    ('Antoinette', 'Capet', 7),
    ('Samuel', 'Delany', 3),
    ('Tony', 'Duvert', 3),
    ('Dennis', 'Cooper', 12),
    ('Monica', 'Bellucci', 11),
    ('Samuel', 'Johnson', 10),
    ('John', 'Dryden', 9),
    ('Alexander', 'Pope', 14),
    ('Lionel', 'Johnson', 16),
    ('Aubrey', 'Beardsley', 15);