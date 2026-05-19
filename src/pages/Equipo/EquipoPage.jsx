
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import PageContainer from "../../components/commons/PageContainer";

const equipoData = [
    {
        id: 1,
        nombre: "Pablo Eduardo Argueta Aguilera",
        matricula: "2022150480067",
        carrera: "Ingeniería en Sistemas Computacionales",
        correo: "2022150480067@tesjo.edu.mx",
        foto: "https://github.com/C4rlos2045/programacion-web-examen/blob/main/src/assets/pablo.png?raw=true",
        rol: "Auditor",
        descripcion: "Especialista en auditoría de sistemas con experiencia en evaluación de procesos y cumplimiento normativo. Responsable de garantizar la calidad y seguridad del proyecto."
    },
    {
        id: 2,
        nombre: "Luz Nadia Flores Domínguez",
        matricula: "2022150480327",
        carrera: "Ingeniería en Sistemas Computacionales",
        correo: "2022150480327@tesjo.edu.mx",
        foto: "https://github.com/C4rlos2045/programacion-web-examen/blob/main/src/assets/luz.jpeg?raw=true",
        rol: "Administradora de Base de Datos",
        descripcion: "Experta en diseño, administración y optimización de bases de datos. Encargada de la arquitectura y mantenimiento de la infraestructura de datos del sistema."
    },
    {
        id: 3,
        nombre: "Sindy Pineda Nieto",
        matricula: "2022150480905",
        carrera: "Ingeniería en Sistemas Computacionales",
        correo: "2022150480905@tesjo.edu.mx",
        foto: "https://github.com/C4rlos2045/programacion-web-examen/blob/main/src/assets/sindy.png?raw=true",
        rol: "Arquitecta de Software",
        descripcion: "Profesional en diseño de arquitecturas de software escalables. Responsable de la planificación y estructura técnica del proyecto."
    },
    {
        id: 4,
        nombre: "Juan Carlos Albarrán Sánchez",
        matricula: "2022150480011",
        carrera: "Ingeniería en Sistemas Computacionales",
        correo: "2022150480011@tesjo.edu.mx",
        foto: "https://github.com/C4rlos2045/programacion-web-examen/blob/main/src/assets/juan.jpeg?raw=true",
        rol: "Desarrollador Full Stack",
        descripcion: "Desarrollador versátil con experiencia en frontend y backend. Encargado del desarrollo de funcionalidades core del sistema de gestión de gastos."
    }
];

export default function Equipo(){
    return (
        <PageContainer title="Equipo de trabajo">
            <Grid container spacing={3}>
                {equipoData.map((miembro) => (
                    <Grid item xs={12} md={6} lg={6} key={miembro.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={miembro.foto}
                                alt={miembro.nombre}
                                sx={{
                                    width: '20%',
                                    height: { xs: 180, sm: 0, md: 250 },
                                    objectFit: 'cover'
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {miembro.nombre}
                                </Typography>
                                
                                <Box sx={{ mb: 1 }}>
                                    <Typography variant="caption" color="textSecondary" display="block">
                                        <strong>Matrícula:</strong> {miembro.matricula}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" display="block">
                                        <strong>Carrera:</strong> {miembro.carrera}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" display="block">
                                        <strong>Correo:</strong> {miembro.correo}
                                    </Typography>
                                </Box>

                                <Box sx={{ mb: 1, mt: 1, borderTop: '1px solid #eee', pt: 1 }}>
                                    <Typography variant="subtitle2" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                                        Rol: {miembro.rol}
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                    {miembro.descripcion}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>        
    )
}