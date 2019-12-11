# select concat(clientes.nombre, clientes.apellidos) as  'nombre', clientes.fecha_nacimiento, clientes.curp, clientes.rfc,
#        from clientes;

# delete from clientes where id_cliente=1;
select * from clientes;
select * from direcciones;

select direcciones.calle, direcciones.num_interior, direcciones.num_exterior, direcciones.num_exterior, direcciones.entre_calles, direcciones.codigo_postal,
    direcciones.colonia,direcciones.estado,direcciones.pais
from direcciones
inner join clientes on direcciones.clientes_id_cliente = clientes.id_cliente
where direcciones.clientes_id_cliente=10;