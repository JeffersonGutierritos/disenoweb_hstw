# select concat(clientes.nombre, clientes.apellidos) as  'nombre', clientes.fecha_nacimiento, clientes.curp, clientes.rfc,
#        from clientes;

# delete from clientes where id_cliente=1;
select * from clientes;
select * from direcciones;

select direcciones.calle, direcciones.num_interior, direcciones.num_exterior, direcciones.num_exterior,
       direcciones.entre_calles, direcciones.codigo_postal, direcciones.ciudad,
    direcciones.colonia,direcciones.estado,direcciones.pais, clientes.nombre, clientes.curp,
       clientes.fecha_nacimiento, clientes.apellidos,
       clientes.rfc
from direcciones
inner join clientes on direcciones.clientes_id_cliente = clientes.id_cliente
where direcciones.clientes_id_cliente=10
limit 1;

 UPDATE hstw.clientes SET nombre='', clientes.apellidos = '', fecha_nacimiento='', curp='', rfc='' WHERE id_cliente = 10;

 UPDATE hstw.direcciones SET calle='Torre del campo',num_interior=0 ,num_exterior=1116,entre_calles='Torre zaragoza',codigo_postal='27271',
                             colonia='hda. sta. maria', estado='coahuila',ciudad='torreon',pais='mexico' WHERE clientes_id_cliente = 10;
